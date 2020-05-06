const express = require("express");
const connectDB = require('./config/db')
const app = express();

app.get('/', (req, res) => res.json({msg: "Looks like we made it!"}))

app.use(express.json({ extended: false }))

connectDB();

app.use('/api/message', require('./routes/message'));
app.use('/api/auth', require('./routes/reaction'));
app.use('/api/project', require('./routes/project'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

