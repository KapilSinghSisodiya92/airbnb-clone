import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 62 stays ♦ 26 august to 30 august ♦ 2 guest </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filter</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
        location="Private room in center of London"
        titile="5 star Luxury Apartment"
        description="3 guest . 1 badroom . 1 bed . 1.5 shared bathroom . wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="$39 / night"
        total="$900 total"
      />
    </div>
  );
}

export default SearchPage;
