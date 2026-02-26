export default function getIconPath(code: string) {
  switch (String(code)) {
    case "0": {
      return "/icons/iconSunny.svg";
    }
    case "1":
    case "2": {
      return "/icons/iconCloudly.svg";
    }
    case "3": {
      return "/icons/iconOverCloud.svg";
    }
    case "48":
    case "45": {
      return "/icons/iconFog.svg";
    }
    case "66":
    case "61":
    case "57":
    case "56":
    case "53":
    case "80":
    case "51": {
      return "/icons/iconDrizzle.svg";
    }
    case "55":
    case "63":
    case "65":
    case "67":
    case "81":
    case "82": {
      return "/icons/iconRain.svg";
    }
    case "73":
    case "75":
    case "77":
    case "85":
    case "86":
    case "71": {
      return "/icons/iconSnow.svg";
    }
    case "99":
    case "96":
    case "95": {
      return "/icons/iconThunderstorms.svg";
    }
    default: {
      return "/icons/iconCloudly.svg";
    }
  }
}
