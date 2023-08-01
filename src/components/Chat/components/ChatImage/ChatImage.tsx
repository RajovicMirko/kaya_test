import { Box } from "@mui/material";
import HomeImage from "src/assets/images/kaya_home_model.jpeg";

type IChatImageReturn = JSX.Element | null;

const ChatImage = (): IChatImageReturn => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default ChatImage;
