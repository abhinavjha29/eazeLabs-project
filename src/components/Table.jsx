import React, { useContext } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { DataContext } from "../store/DataContext";

const Table = () => {
  const randomData = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 50
  );
  const dataContext = useContext(DataContext);
  const productsData = dataContext.tableData;
  // const productsData = [
  //   {
  //     id: 1,
  //     productCode: "EA",
  //     productName: "Elite Admin",
  //     license: "Single Use",
  //     supportAgent: "John Doe",
  //     technology: "Angular",
  //     tickets: 46,
  //     sales: 356,
  //     earnings: "$2850.06",
  //   },
  //   {
  //     id: 2,
  //     productCode: "MA",
  //     productName: "Monster Admin",
  //     license: "Single Use",
  //     supportAgent: "Venessa Fern",
  //     technology: "Vue Js",
  //     tickets: 46,
  //     sales: 356,
  //     earnings: "$2850.06",
  //   },
  //   // Add more products as needed
  // ];
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div
            className="card-body mb-8"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <div className="d-md-flex">
              <div className="dropdown">
                <button
                  className="btn btn-secondary bg-transparent dropdown-toggle text-dark border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </button>
              </div>
              <div className="ms-auto d-flex">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-dark">
                    Left
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                    Middle
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                    Right
                  </button>
                </div>
                <div className="dl dropdown">
                  <select className="form-select shadow-none">
                    <option value="0" selected>
                      Monthly
                    </option>
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table v-middle">
              <thead>
                <tr className="bg-light">
                  <th className="border-top-0 table-heading">Products</th>
                  <th className="border-top-0">
                    License
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          // height={60}
                          // width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                  <th className="border-top-0">
                    Support Agent
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          height={60}
                          width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                  <th className="border-top-0">
                    Technology
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          height={60}
                          width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                  <th className="border-top-0">
                    Tickets
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          height={60}
                          width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                  <th className="border-top-0">
                    Sales
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          height={60}
                          width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                  <th className="border-top-0">
                    Earnings
                    <div className="mt-2 container">
                      <Sparklines
                        data={randomData}
                        height={40}
                        preserveAspectRatio="none"
                      >
                        <SparklinesLine
                          color="#17a2b8"
                          height={60}
                          width={10}
                        />
                      </Sparklines>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        {/* <div className="m-r-10">
                          <a className="btn btn-circle d-flex btn-info text-white">
                            {product.productCode}
                          </a>
                        </div> */}
                        <div>
                          <h4 className="m-b-0 font-16">
                            {product.productName}
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td>{product.license}</td>
                    <td>{product.supportAgent}</td>
                    <td>
                      <label className="label label-danger">
                        {product.technology}
                      </label>
                    </td>
                    <td>{product.tickets}</td>
                    <td>{product.sales}</td>
                    <td>
                      <h5 className="m-b-0">{product.earnings}</h5>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
