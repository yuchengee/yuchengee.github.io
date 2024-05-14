---
slug: java-request-chatgpt
title: java调用chatgpt
date: 2023-04-07
authors: yuchengee
tags: [java,chatgpt,http]
---
java调用chatgpt
<!--truncate-->
参考 https://blog.csdn.net/m0_51545690/article/details/129739621

apiKey需要注册账号，然后自己生成。

### 依赖
使用hutool发送http请求
```
<dependency>
	<groupId>cn.hutool</groupId>
	<artifactId>hutool-all</artifactId>
	<version>5.8.16</version>
</dependency>
```

### 代码
ChatGptMessage
```
@Getter
@Setter
@AllArgsConstructor
public class ChatGptMessage {
    private String role;
    private String content;
}
```

ChatGptRequestParameter
```
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatGptRequestParameter {
    private String model = "gpt-3.5-turbo";
    private List<ChatGptMessage> messages = new ArrayList<>();

    public void addMessage(ChatGptMessage chatGptMessage) {
        messages.add(chatGptMessage);
    }
}
```

ChatGptResponseParameter
```
@Getter
@Setter
@AllArgsConstructor
public class ChatGptResponseParameter {
    private String id;
    private String object;
    private String created;
    private String model;
    private Usage usage;
    private List<Choices> choices;
}
```

Choices
```
@Getter
@Setter
@AllArgsConstructor
public class Choices {
    private ChatGptMessage message;
    private String finish_reason;
    private Integer index;
}
```
Usage
```
@Getter
@Setter
@AllArgsConstructor
public class Usage {
    private String prompt_tokens;
    private String completion_tokens;
    private String total_tokens;
}
```

```
@Service
public class CustomChatGpt {
    @Autowired
    private ObjectMapper objectMapper; // 创建一个ObjectMapper，用于解析和创建json
    // 使用的模型
    private String model = "gpt-3.5-turbo-0301";
    // 对应的请求接口
    private String url = "https://api.openai.com/v1/chat/completions";
    // 默认编码
    private Charset charset = StandardCharsets.UTF_8;

    // 创建一个ChatGptRequestParameter，用于携带请求参数
    private ChatGptRequestParameter chatGptRequestParameter = new ChatGptRequestParameter();

    public String hutoolHttp(String apiKey, String question) {
        // 设置请求参数
        chatGptRequestParameter.addMessage(new ChatGptMessage("user", question));

        try {
            // Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("", 80));
            String resStr = cn.hutool.http.HttpRequest.post(url)
            //       .setProxy(proxy)
                    .header(HttpHeaders.CONTENT_TYPE, "application/json")
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                    .body(objectMapper.writeValueAsString(chatGptRequestParameter))
                    .execute().body();
            ChatGptResponseParameter responseParameter = objectMapper.readValue(resStr, ChatGptResponseParameter.class);
            String ans = "";
            // 遍历所有的Choices（一般都只有一个）
            for (Choices choice : responseParameter.getChoices()) {
                ChatGptMessage message = choice.getMessage();
                chatGptRequestParameter.addMessage(new ChatGptMessage(message.getRole(), message.getContent()));
                String s = message.getContent().replaceAll("\n+", "\n");
                ans += s;
            }
            // 返回信息
            return ans;
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 发生异常，移除刚刚添加的ChatGptMessage
        chatGptRequestParameter.getMessages().remove(chatGptRequestParameter.getMessages().size() - 1);
        return "您当前的网络无法访问";
    }
}
```