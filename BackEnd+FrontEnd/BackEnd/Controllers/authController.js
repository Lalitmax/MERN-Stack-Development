import Register from "../module/register.js";

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Register.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "Email not found" });
        } else {
            // Check if the provided password matches the user's password
            if (user.password !== password) {
                return res.status(401).json({ error: "Password incorrect" });
            } else {
                // Password is correct, send success response
                    
            }
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: "Failed to login" });
    }
}

const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if a user with the provided email already exists
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // If user doesn't exist, register the new user
        const newUser = new Register({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: "Failed to register user" });
    }
};


export default { userLogin, userRegister };
