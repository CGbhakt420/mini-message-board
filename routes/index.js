import express from 'express';

const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

//index route
router.get('/', (req, res)=>{
    res.render('index', {title: 'Mini Messageboard', messages: messages});
})

//new message form route
router.get('/new', (req, res)=>{
    res.render('form');
})

router.post('/new', (req,res)=>{
    const {messageText, messageUser} = req.body;
    messages.push({text: messageText, user: messageUser, added: new Date()});
    res.redirect('/');
})

export default router;