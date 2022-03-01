import { authToken } from "./test";

app.get('/profile', authToken, async (req, res) => {
    const profile = await Profile.findAll({
        ownerId: req.user.id
    });
    res.status(200).send(profile);
});