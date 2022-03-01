app.get('/login', async (req, res) => {
    const { username, password } = req.query;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).send({ error: 'invalid username or password' });
    }
    const match = await argon2.verify(user.password, password);
    if (!match) {
        return res.status(401).send({ error: 'invalid username or password' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.send({ token });
})