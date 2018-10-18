const verifyWebhook = (req, res) => {
    console.log("Verify-webhook called");
    let VERIFY_TOKEN = 'pusher-bot-application';

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
      }
  };

  module.exports = verifyWebhook;