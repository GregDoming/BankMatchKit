import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import LenderSpecialtiesBoxes from "components/LenderSpecialtiesBoxes/LenderSpecialtiesBoxes.js";
import LenderSpecialtiesOutline from "components/LenderSpecialtiesOutline/LenderSpecialtiesOutline.js";

import lenderSpecialtiesStyle from "assets/jss/nextjs-material-kit-pro/components/lenderSpecialtiesStyle.js";

const useStyles = makeStyles(lenderSpecialtiesStyle);

const LenderSpecialties = props => {
  const classes = useStyles();
  const { state, dispatch } = props;
  const {
    specialtySelectZero,
    specialtySelectOne,
    specialtySelectTwo,
    specialtySelectThree,
    specialtySelectFour,
    specialtySelectFive,
    specialtySelectSix,
    specialtySelectSeven,
    specialtySelectEight,
    specialtySelectNine
  } = state;


  const [specialtiesStringArr, setSpecialtiesStringArr] = React.useState([
    "specialtySelectZero",
    "specialtySelectOne",
    "specialtySelectTwo",
    "specialtySelectThree",
    "specialtySelectFour",
    "specialtySelectFive",
    "specialtySelectSix",
    "specialtySelectSeven",
    "specialtySelectEight",
    "specialtySelectNine"
  ]);

  const [currentSpeciality, setCurrentSpeciality] = React.useState("");
  const [listObj, setListObj] = React.useState({});

  React.useEffect(() => {
    const specialtyStrings = [
      specialtySelectZero,
      specialtySelectOne,
      specialtySelectTwo,
      specialtySelectThree,
      specialtySelectFour,
      specialtySelectFive,
      specialtySelectSix,
      specialtySelectSeven,
      specialtySelectEight,
      specialtySelectNine
    ];

    const leftListArr = [];
    const rightListArr = [];
    const returnListObj = {};

    let savedIndex = 0;

    specialtyStrings.forEach((ele, index) => {
      if (ele !== "none" && savedIndex % 2 === 0) {
        leftListArr.push(
          <LenderSpecialtiesBoxes handleSpecialtiesDelete={handleSpecialtiesDelete} key={"leftListArr" + index} id={index} specialty={ele} />
        );
        setCurrentSpeciality(specialtyStrings[index]);
        savedIndex ++;
      } else if (ele !== "none" && savedIndex % 2 !== 0) {
        rightListArr.push(
          <LenderSpecialtiesBoxes handleSpecialtiesDelete={handleSpecialtiesDelete} key={"rightListArr" + index} id={index} specialty={ele} />
        );
        setCurrentSpeciality(specialtyStrings[index]);
        savedIndex ++;
      }
    })

    // while (specialtyStrings[index] !== "none" && rightListArr.length < 5) {
    //   if (index % 2 === 0) {
    //     leftListArr.push(
    //       <LenderSpecialtiesBoxes handleSpecialtiesDelete={handleSpecialtiesDelete} key={"leftListArr" + index} id={specialtiesStringArr[index]} specialty={specialtyStrings[index]} />
    //     );
    //     index++;
    //   } else {
    //     rightListArr.push(
    //       <LenderSpecialtiesBoxes handleSpecialtiesDelete={handleSpecialtiesDelete} key={"rightListArr" + index} id={specialtiesStringArr[index]} specialty={specialtyStrings[index]} />
    //     );
    //     index++;
    //   }
    // }

    if (leftListArr.length < 5 && leftListArr.length === rightListArr.length) {
      leftListArr.push(
        <LenderSpecialtiesOutline
          specialtiesArr={specialtyStrings}
          currentSpeciality={currentSpeciality}
          idNumber={savedIndex}
          state={state}
          dispatch={dispatch}
          handleSpecialtiesChange={handleSpecialtiesChange}
          handleSpecialtiesError={handleSpecialtiesError}
        />
      );
    } else if (
      rightListArr.length < 5 &&
      leftListArr.length > rightListArr.length &&
      leftListArr.length > 0
    ) {
      rightListArr.push(
        <LenderSpecialtiesOutline
          specialtiesArr={specialtyStrings}
          currentSpeciality={currentSpeciality}
          idNumber={savedIndex}
          state={state}
          dispatch={dispatch}
          handleSpecialtiesChange={handleSpecialtiesChange}
          handleSpecialtiesError={handleSpecialtiesError}
        />
      );
    }

    returnListObj.left = leftListArr;
    returnListObj.right = rightListArr;

    setListObj(returnListObj);
  }, [
    specialtySelectZero,
    specialtySelectOne,
    specialtySelectTwo,
    specialtySelectThree,
    specialtySelectFour,
    specialtySelectFive,
    specialtySelectSix,
    specialtySelectSeven,
    specialtySelectEight,
    specialtySelectNine
  ]);

  const handleSpecialtiesChange = (event, num) => {
    event.preventDefault();
    const keyNumber = event.target.id.replace(/(^\d+)(.+$)/i, "$1");
    const tempString = specialtiesStringArr[keyNumber];

    dispatch({ type: "handleLenderSpecialtySelect", payload: { num, tempString } });
  };

  const handleSpecialtiesError = event => {
    event.preventDefault();
    // const keyNumber = event.target.id.replace(/(^\d+)(.+$)/i, "$1");
    // const tempArr = [...specialtiesArr];
    // tempArr.splice(keyNumber, 1, "none");
    // setSpecialtiesArr(tempArr);
  };

  const handleSpecialtiesDelete = (event, index, value) => {
    const specialtyStrings = [
      specialtySelectZero,
      specialtySelectOne,
      specialtySelectTwo,
      specialtySelectThree,
      specialtySelectFour,
      specialtySelectFive,
      specialtySelectSix,
      specialtySelectSeven,
      specialtySelectEight,
      specialtySelectNine
    ];
    const tempSpecialtiesStringArr = [...specialtiesStringArr]
    const tempSpecialtyArr = [...specialtyStrings]
    tempSpecialtyArr.splice(index, 1, "none")
    console.log(tempSpecialtyArr)
    const returnArr = [];
    const returnStringArr = [];
    event.preventDefault();
    tempSpecialtyArr.forEach((ele, index) => {
      if (ele !== "none") {
        returnArr.push(ele)
        returnStringArr.push(tempSpecialtiesStringArr.shift())
      }
    })


    dispatch({ type: "handleSpecialityDelete", payload: { returnArr, returnStringArr } });

  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.columnContainer}>{listObj.left}</div>
        <div className={classes.columnContainer}>{listObj.right}</div>
      </div>
    </>
  );
};

export default LenderSpecialties;
