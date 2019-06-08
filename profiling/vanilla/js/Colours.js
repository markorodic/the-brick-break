export const colours = {
  main: "#6686BB",
  rowOne: "rgba(0, 46, 142, 0.5)",
  rowTwo: "rgba(0, 50, 165, 0.5)",
  rowThree: "rgba(0, 55, 200, 0.5)",
  rowFour: "rgba(0, 64, 230, 0.5)",
  rowFive: "rgba(0, 77, 232, 0.5)",
  rowSix: "rgba(5, 88, 255, 0.5)",
  rowSeven: "rgba(25, 98, 242, 0.5)",
  rowEight: "rgba(43, 110, 255, 0.5)",
  rowNine: "rgba(58, 120, 255, 0.5)",
  rowTen: "rgba(71, 129, 255, 0.5)",
  rowEleven: "rgba(84, 138, 255, 0.5)",
  rowTwelve: "rgba(99, 148, 255, 0.5)",
  rowThirteen: "rgba(112, 157, 255, 0.5)",
  rowFourteen: "rgba(127, 167, 255, 0.5)",
  rowFifteen: "rgba(142, 178, 255, 0.5)",
  rowSixteen: "rgba(155, 187, 255, 0.5)",
  rowSeventeen: "rgba(165, 194, 255, 0.5)",
  rowEighteen: "rgba(183, 206, 255, 0.5)",
  rowNineteen: "rgba(196, 214, 255, 0.5)",
  rowTwenty: "rgba(214, 227, 255, 0.5)"
};

export const whichColour = function(yPostion) {
  switch (yPostion) {
    case 0:
      return colours.rowOne;
    case 1:
      return colours.rowTwo;
    case 2:
      return colours.rowThree;
    case 3:
      return colours.rowFour;
    case 4:
      return colours.rowFive;
    case 5:
      return colours.rowSix;
    case 6:
      return colours.rowSeven;
    case 7:
      return colours.rowEight;
    case 8:
      return colours.rowNine;
    case 9:
      return colours.rowTen;
    case 10:
      return colours.rowEleven;
    case 11:
      return colours.rowTwelve;
    case 12:
      return colours.rowThirteen;
    case 13:
      return colours.rowFourteen;
  }
};
