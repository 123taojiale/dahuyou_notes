import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  // code: 406,
  // msg: "错误信息 xxx",
  code: 0,
  msg: "",
  data: [{
      id: "1",
      midImg: "https://dahuyou.top/background_image/spring_placeholder.jpg",
      bigImg: "https://dahuyou.top/background_image/spring_original.jpg",
      title: "Spring",
      description: "Where there's a will there's a way.",
    },
    {
      id: "2",
      midImg: "https://dahuyou.top/background_image/summer_placeholder.jpg",
      bigImg: "https://dahuyou.top/background_image/summer_original.jpg",
      title: "Summer",
      description: "Where there's a will there's a way.",
    },
    {
      id: "3",
      midImg: "https://dahuyou.top/background_image/autumn_placeholder.jpg",
      bigImg: "https://dahuyou.top/background_image/autumn_original.jpg",
      title: "Autumn",
      description: "Where there's a will there's a way.",
    },
    {
      id: "4",
      midImg: "https://dahuyou.top/background_image/winter_placeholder.jpg",
      bigImg: "https://dahuyou.top/background_image/winter_original.jpg",
      title: "Winter",
      description: "Where there's a will there's a way.",
    }
  ]
});

// https://dahuyou.top/background_image/autumn-original.jpg