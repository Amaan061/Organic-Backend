const Feedback = require('../models/feedbackModel');

// Submit feedback
const submitFeedback = async (req, res) => {
    try {
        const { productId, name, message } = req.body;

        if (!productId || !name || !message) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const feedback = await Feedback.create({
            productId,
            name,
            message
        });

        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    submitFeedback
};
