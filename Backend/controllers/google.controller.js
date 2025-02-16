import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "postmessage"
);

export const signinWithGoogle = async (req, res) => {
  const { code } = req.body;
  try {
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });
    const { email, name, picture } = ticket.getPayload();

    // save the user in the database if needed

    res.status(200).json({ email, name, picture });

  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
