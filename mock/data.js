import Mock from "mockjs";
const columns = [
  {
    "id": 0,
    "title": "序号",
  },
  {
    "id": 1,
    "title": "r日期",
  },
  {
    "id": 2,
    "title": "理论",
  },
  {
    "id": 3,
    "title": "技能",
  },
  {
    "id": 4,
    "title": "分析和解决",
  },
  {
    "id": 5,
    "title": "是否周考",
  },
  {
    "id": 6,
    "title": "操作",
  }
]


const data = Mock.mock({
  "list|30": [
    {
      "id|+1": 1,
      "key|+1": 1,
      name: "@FIRST",
      tel: 166722193892,
      "number|100-900": 1,
      "money|100-900": 1,
      "type|1": ["上线", "未上线"],
      operation: ["查看", "编辑", "禁用"]
    }
  ]
});

export default {
  columns,
  data
}