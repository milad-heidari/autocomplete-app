import React, { useState, useEffect } from "react";
import Elements from "../Elements/ElementsExport";
import data from "../data.json";
function MainLayout() {
  const [trueItems, setTrueItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let matches = [];
    if (searchText.length > 0) {
      data.states.filter((state) => {
        const regexp = new RegExp(`^${searchText}`, "gi");
        if (state.name.match(regexp) || state.abbr.match(regexp)) {
          matches.push(state);
        }
      });
    }
    console.log("matches", matches);
    setTrueItems(matches);
  }, [searchText]);

  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("input", () => {
      setSearchText(search.value);
      // console.log(search.value)
    });
  }

  const renderItems = trueItems.map((item) => {
    return (
      <Elements.Div className="elements-form__match-list-item">
        <Elements.P
          className="elements-form__match-list-p"
          text={`${item.name} (${item.abbr}) ${item.capital}  `}
        />
      </Elements.Div>
    );
  });

  return (
    <>
      <Elements.Form className="elements-form" onSubmit={() => {}}>
        <Elements.P className="elements-form_p" text="Search For State" />
        <Elements.Input
          className="elements-form_input"
          placeholder="Enter State Name or abbreviation..."
          id="search"
        />
        <Elements.Div className="elements-form__match-list">
          {trueItems.length > 0 ? renderItems : null}
        </Elements.Div>
      </Elements.Form>
    </>
  );
}

export default MainLayout;
