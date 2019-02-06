export const colours = {
  main: "white",
  rowOne: "rgba(255, 255, 255, 1)",
  rowTwo: "rgba(255, 255, 255, 0.95)",
  rowThree: "rgba(255, 255, 255, 0.9)",
  rowFour: "rgba(255, 255, 255, 0.85)",
  rowFive: "rgba(255, 255, 255, 0.8)",
  rowSix: "rgba(255, 255, 255, 0.75)",
  rowSeven: "rgba(255, 255, 255, 0.7)",
  rowEight: "rgba(255, 255, 255, 0.65)",
  rowNine: "rgba(255, 255, 255, 0.6)",
  rowTen: "rgba(255, 255, 255, 0.55)",
  rowEleven: "rgba(255, 255, 255, 0.5)",
  rowTwelve: "rgba(255, 255, 255, 0.45)",
  rowThirteen: "rgba(255, 255, 255, 0.4)",
  rowFourteen: "rgba(255, 255, 255, 0.35)",
  rowFifteen: "rgba(255, 255, 255, 0.3)",
  rowSixteen: "rgba(155, 187, 255, 0.25)",
  rowSeventeen: "rgba(255, 255, 255, 0.2)",
  rowEighteen: "rgba(255, 255, 255, 0.15)",
  rowNineteen: "rgba(255, 255, 255, 0.1)",
  rowTwenty: "rgba(255, 255, 255, 0.05)"
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
