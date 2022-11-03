import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TypoButtons = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h6"
        color="error"
        align="center"
        mt={4}
      >
        MUI TYPOGRAPHY
      </Typography>
      <Typography
        variant="body1"
        sx={{ textShadow: " 1px 1px 3px yellow" }}
        align="justify"
        mt={4}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
        aspernatur vitae fugit maiores ea debitis quod, illo veritatis
        consequuntur laboriosam, eos consequatur? Natus quod perferendis
        reprehenderit vitae, nemo cupiditate facilis.
      </Typography>

      <Box display="flex" width="50%" flexDirection="column" gap={2} mt={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
    </Container>
  );
};

export default TypoButtons;
