export default function HighlightTableData() {
    return firstLetter => {
        switch (firstLetter.toLowerCase()) {
          case "a":
            return "red_field";
          case "b":
            return "blue_field";
          default:
            return "";
        }
      };
  }