const itTechDates = 
[
    {
        title:'【算法】堆排序算法的讲解和代码实践',
        contents:`思路 学习堆排序之前，先简单介绍一下什么是堆。
                但是要了解堆，还得先连接二叉树。二叉树，就是每个节点最多有两个子节点的树形的数据结构。
                二叉树又有完全二叉树、满二叉树等等，细的就不讲了，可以搜一下资料`,
        vip:1.5,
        nickName:'名字越长越拉风',
        Comments:20,
        like:9
    },
    {
        title:'搞懂 Kubernetes 网络模型',
        contents:`Kubernetes 是为运行分布式集群而建立的，
                分布式系统的本质使得网络成为 Kubernetes 的核心和必要组成部分，
                了解 Kubernetes 网络模型可以使你能够正确运行、监控和排查应用程序故障。
                Kubernetes 是为运行分布式集群而建立的，分`,
        vip:1.6,
        nickName:'我就拉风',
        Comments:21,
        like:10
    },
    {
        title:'JAVA体系结构',
        contents:`Java体系结构主要由以下几个组件组成： 1 Java虚拟机（JVM）：
                Java程序在运行时需要通过JVM来解释执行Java字节码。JVM是Java平台的
                核心组件之一，它提供了内存管理、垃圾回收、安`,
        vip:1.6,
        nickName:'我爱学习',
        Comments:22,
        like:11
    },
    {
        title:'java类加载机制',
        contents:`java代码执行流程 根据上图所示，Java 代码执行步骤如下：步骤 1： 
                获取 Java 源代码；步骤 2： 编译器把 java 文件转变成 class 文件。
                编译过程大致可以分为 1 个准备过程`,
        vip:1.7,
        nickName:'我爱工作',
        Comments:23,
        like:12
    }
];


fetch('http://localhost:8080/ItTechData')   
  .then(response => {
    if (response.ok) {
      return response.json(); // 将响应数据转换为JSON
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Received data:', data);
    // 这里处理你的数据
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });