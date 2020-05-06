import Tree from "react-tree-graph";
import React from "react";

let data = {
  name: "Parent",
  b: "jgjg",
  children: [
    {
      name: "1",
      children: [
        {
          name: "3",
          children: [
            {
              name: "5",
            },
            {
              name: "6",
            },
          ],
        },
        {
          name: "4",
        },
      ],
    },
    {
      name: "2",
    },
  ],
};

const tasks = [
  {
    id: 1,
    name: "1",
    parent: null,
    children: [2, 3],
  },
  {
    id: 2,
    name: "2",
    parent: 1,
    children: [4, 5],
  },
  {
    id: 3,
    name: "3",
    parent: 1,
    children: [],
  },
  {
    id: 4,
    name: "4",
    parent: 2,
    children: [],
  },
  {
    id: 5,
    name: "5",
    parent: 2,
    children: [6],
  },
  {
    id: 6,
    name: "6",
    parent: 5,
    children: [],
  },
];

export default function TreeComponent() {
  return <Tree data={data} height={400} width={400} />;
}
