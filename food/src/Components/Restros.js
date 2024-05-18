import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import data1 from "./Mockdata.js";

export default function Restros({ setData }) {
  const [restro, setrestro] = useState(
    data1.map(() => ({
      quantity: 1,
      disable: false,
    }))
  );

  const [searchtext, setsearchtext] = useState("");
  const [filterdata, setfilterdata] = useState(data1);

  useEffect(() => {
    let selected = restro.reduce((arr, item, index) => {
      if (item.disable) {
        arr.push({ index: index, ...item, ...filterdata[index] });
      }
      return arr;
    }, []);
    setData(selected);
  }, [restro]);

  const Addition1 = (index) => () => {
    console.log("add");
    const clickedrestro = [...restro];
    clickedrestro[index].quantity += 1;
    setrestro(clickedrestro);
  };
  const Subtraction1 = (index) => () => {
    console.log("sub");
    const clickedrestro = [...restro];
    clickedrestro[index].quantity -= 1;
    if (clickedrestro[index].quantity < 1) {
      clickedrestro[index].disable = false;
      clickedrestro[index].quantity = 1;
    }
    setrestro(clickedrestro);
  };
  const Updating1 = (index) => {
    console.log("hi");
    const clickedrestro = [...restro];
    clickedrestro[index].disable = true;
    setrestro(clickedrestro);
  };
  // console.log("selectedItems", selectedItems);

  return (
    <div>
      <div style={{ marginBottom: "20px", marginLeft: "40%" }}>
        <input
          type="search"
          placeholder="Search menu items..."
          style={{
            marginRight: "10px",
            width: "250px",
            height: "25px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            fontSize: "20px",
          }}
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          style={{ fontSize: "14px", width: "80px", height: "30px" }}
          onClick={() => {
            console.log(searchtext);
            const filtersearchrestro = data1.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setfilterdata(filtersearchrestro);
          }}
        >
          Search
        </button>
      </div>
      <div
        className="item-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {filterdata.map((restrodata, index) => (
          <Card
            key={index}
            sx={{ width: "18%", paddingInline: 4, paddingBlock: 2, margin: 2 }}
          >
            <CardMedia
              component="img"
              alt={restrodata.info.name}
              height="140"
              image={restrodata.info.imageid}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {restrodata.info.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>{restrodata.info.costForTwo} </p>
                <p>
                  Rating:<b>{restrodata.info.avgRating}*</b>
                </p>
              </Typography>
            </CardContent>

            {!restro[index].disable ? (
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  sx={{
                    display: "block",

                    "&:hover": {
                      bgcolor: "#33FFFF",
                    },
                  }}
                  onClick={() => Updating1(index)}
                  // disabled={restro[index].disable}
                >
                  Add to cart
                </Button>
              </CardActions>
            ) : (
              <CardActions sx={{ marginLeft: "20px" }}>
                <Button
                  variant="contained"
                  onClick={Addition1(index)}
                  disabled={restro[index].quantity > 2}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  className="value-update"
                  readOnly
                >
                  {restro[index].quantity}
                </Button>

                <Button
                  variant="contained"
                  onClick={Subtraction1(index)}
                  // disabled={restro[index].quantity < 2}
                >
                  -
                </Button>
              </CardActions>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
