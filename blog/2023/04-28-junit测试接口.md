---
slug: junit-springboot
title: junit测试接口
date: 2023-04-28
authors: yuchengee
tags: [springboot,junit,测试]
---
junit测试接口
<!--truncate-->
在使用springboot开发web应用时，通常需要写测试用例，来保证代码的质量。当我们开发一个web接口后，开发人员需要使用junit对该接口进行测试，即自测。

### 首先使用的依赖
```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-test</artifactId>
	<scope>test</scope>
</dependency>
```

然后是测试接口的代码

  

### application/json接口

```java
@SpringBootTest
public class AreaManageControllerTest {
    @Autowired
    private WebApplicationContext webApplicationContext;
	// 测试数据的代码目录 项目/test/resources/data/
	private static final String dataPath = ClassLoader.getSystemClassLoader().getResource("data").getPath() + File.separator;
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        //使用上下文构建MockMvc
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

	// json请求
    @Test
    public void testUser() throws Exception {
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{" +
                        "    \"age\": 18," +
                        "    \"name\": \"xxx\"" +
                        "}")).andReturn();
        Assertions.assertEquals("0", JSON.parseObject(mvcResult.getResponse().getContentAsString()).getString("retcode"));
    }
}
```

  

### formdata，需要使用session的接口

```java
private void testUser() throws Exception {
		MockHttpSession session = new MockHttpSession();
		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params1.add("name", "xx");
        params1.add("age", "11");
        long l = System.currentTimeMillis();
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/user")
                .params(params).session(session)).andReturn();
        System.out.print("cost:" + (System.currentTimeMillis() - l)+"ms");
        // 获取返回结果
        String result = JSON.parseObject(mvcResult.getResponse().getContentAsString()).get("Result").toString();
        Assertions.assertEquals("Success", result);
}
```
  
### 需要上传文件的接口

```java
@Test
    public void testGetLayerInfo() throws Exception {
        // 上传普通文件
        InputStream inputStream1 = new FileInputStream(testPath + "a.txt");
        InputStream inputStream2 = new FileInputStream(testPath + "b.png");
        InputStream inputStream3 = new FileInputStream(testPath + "c.csv");
        InputStream inputStream4 = new FileInputStream(testPath + "d.zip");
        MvcResult mvcResult = mockMvc.perform(
                MockMvcRequestBuilders
                        .multipart("/upload")
                        .file(new MockMultipartFile("files", "a.txt", "multipart/form-data", inputStream1))
                        .file(new MockMultipartFile("files", "b.png", "multipart/form-data", inputStream2))
                        .file(new MockMultipartFile("files", "c.csv", "multipart/form-data", inputStream3))
                        .file(new MockMultipartFile("files", "d.zip", "multipart/form-data", inputStream4))
                        .param("name", "aaa")
                        .param("age", "21")
        ).andReturn();
        String result = JSON.parseObject(mvcResult.getResponse().getContentAsString()).get("Result").toString();
        Assertions.assertEquals("Success", result);
    }
```