import React from "react";
import { DataContext } from "./DataContext";

const DataProvider = (props) => {
  const smallCardData = [
    {
      title: "Card 1",
      bigAmount: "$1200",
      smallAmount1: "views",
      smallAmount2: "23443 +12%",
      backgroundColor: "bg-lime-500",
    },
    {
      title: "Card 2",
      bigAmount: "$1500",
      smallAmount1: "124(+78%)",
      smallAmount2: "rates",
      backgroundColor: "bg-blue-300",
    },
    {
      title: "Card 3",
      bigAmount: "$1800",
      smallAmount1: "^17%",
      smallAmount2: "react",
      backgroundColor: "bg-red-300",
    },
    {
      title: "Card 4",
      bigAmount: "$2000",
      smallAmount1: "180(-87%)",
      smallAmount2: "stocks",
      backgroundColor: "bg-grey-600",
    },
  ];
  const bigCardData = [
    [
      { title: "Completed Iterations", value: 12 },
      { title: "Pending Tasks", value: 5 },
      { title: "Active Users", value: 20 },
    ],
    [
      { title: "Revenue", value: "$1000" },
      { title: "Profit", value: "$500" },
      { title: "Expenses", value: "$300" },
    ],
    [
      { title: "Total Orders", value: 50 },
      { title: "Pending Orders", value: 10 },
      { title: "Completed Orders", value: 40 },
    ],
  ];

  const tableData = [
    {
      id: 1,
      productCode: "EA",
      productName: "Elite Admin",
      license: "Single Use",
      supportAgent: "John Doe",
      technology: "Angular",
      tickets: 46,
      sales: 356,
      earnings: "$2850.06",
    },
    {
      id: 2,
      productCode: "MA",
      productName: "Monster Admin",
      license: "Single Use",
      supportAgent: "Venessa Fern",
      technology: "Vue Js",
      tickets: 46,
      sales: 356,
      earnings: "$2850.06",
    },
    {
      id: 3,
      productCode: "PA",
      productName: "Premium Admin",
      license: "Single Use",
      supportAgent: "Alice Smith",
      technology: "React",
      tickets: 50,
      sales: 400,
      earnings: "$3200.00",
    },
    {
      id: 4,
      productCode: "BA",
      productName: "Basic Admin",
      license: "Single Use",
      supportAgent: "Bob Johnson",
      technology: "Bootstrap",
      tickets: 30,
      sales: 280,
      earnings: "$2200.50",
    },
    {
      id: 5,
      productCode: "SA",
      productName: "Standard Admin",
      license: "Single Use",
      supportAgent: "Elena Rodriguez",
      technology: "Svelte",
      tickets: 60,
      sales: 420,
      earnings: "$3500.75",
    },
    {
      id: 6,
      productCode: "WA",
      productName: "Web Admin",
      license: "Single Use",
      supportAgent: "Chris Evans",
      technology: "Webpack",
      tickets: 55,
      sales: 380,
      earnings: "$3000.25",
    },
  ];
  const dataContext = {
    smallCardData: smallCardData,
    bigCardData: bigCardData,
    tableData: tableData,
  };
  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
