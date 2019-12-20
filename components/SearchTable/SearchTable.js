import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Check from "@material-ui/icons/Check";
// core components
import Table from "components/Table/Table.js";

import style from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

const SearchTable = () => {
  const [checked, setChecked] = React.useState([1, 3, 5]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <Table
      striped
      tableHead={["#", "", "Product Name", "Type", "Qty", "Price", "Amount"]}
      tableData={[
        [
          "1",
          <Checkbox
            checked={checked.indexOf(1) !== -1}
            tabIndex={-1}
            onClick={() => handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
          />,
          "Moleskine Agenda",
          "Office",
          "25",
          "€ 49",
          "€ 1,225"
        ],
        [
          "2",
          <Checkbox
            checked={checked.indexOf(2) !== -1}
            tabIndex={-1}
            onClick={() => handleToggle(2)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
          />,
          "Stabilo Pen",
          "Office",
          "30",
          "€ 10",
          "€ 300"
        ],
        {
          total: true,
          colspan: "5",
          amount: (
            <span>
              <small>€</small>1,525
            </span>
          )
        }
      ]}
      customCellClasses={[
        classes.textCenter,
        classes.padding0,
        classes.textRight,
        classes.textRight
      ]}
      customClassesForCells={[0, 1, 5, 6]}
      customHeadCellClasses={[
        classes.textCenter,
        classes.textRight,
        classes.textRight
      ]}
      customHeadClassesForCells={[0, 5, 6]}
    />
  );
}

export default SearchTable;