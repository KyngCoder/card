export const getImageClassName = (imageName) => {
    switch (imageName) {
      case "/src/assets/icons/watermark.svg":
        return "bg-gray-900";
      case "/src/assets/icons/rebelAllianceWatermark.svg":
        return "bg-red-600";
      case "/src/assets/icons/noFactionWater.svg":
        return "bg-red-200";
      case "/src/assets/icons/factionJedi.svg":
        return "bg-green-600";
      default:
    }
  };