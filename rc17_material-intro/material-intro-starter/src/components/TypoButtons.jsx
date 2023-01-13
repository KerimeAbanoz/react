import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          mt={4}
          color="secondary"
          sx={{
            backgroundColor: "lightgreen",
            color: "#eee",
            fontSize: "1.4rem",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sunt
          maiores alias. Suscipit, sint. Fuga recusandae error blanditiis fugiat
          itaque.
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet
          sit totam aliquid, quo odio iure omnis est numquam. Doloremque
          mollitia natus vero et quos eos enim nulla, soluta illum!
        </Typography>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            // justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
