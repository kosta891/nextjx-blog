import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  // next podrzava middleware urlencoded() i json()
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !email.includes('.') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input. Please try again' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    let clientMongo;

    try {
      clientMongo = await MongoClient.connect(
        'mongodb+srv://kosta:155198914@cluster0.xzvva.mongodb.net/nextjs-blog?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = clientMongo.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
    } catch (error) {
      clientMongo.close();
      res.status(500).json({ message: 'Storing message failed!' });

      return;
    }

    clientMongo.close();

    res
      .status(201)
      .json({ status: 'Successfuly stored message!', message: newMessage });
  }
};

export default handler;
