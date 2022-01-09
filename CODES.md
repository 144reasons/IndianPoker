| Code | Meaning|
|------|--------|
| MISSINGINFO | There is info missing in your request. For example when creating a game and you dont insert the `fee` value in your event. Check your request |
| WRONGFORMAT | The response was submitted in the wrong format. For example, you send an array instead of an object | 
| CTOROOM | Client successfully connected to the room |
| ALREADYEXISTS | What you tried creating already exists. For example, when registering a new account with a username that is already registered by someone else |
| WRONGINFO | Emitted when you submit a wrong field. Usually in loginaccount event if you submit wrong password for specified account | 
| LIS | Logged In Succesfully |  
| LIA | Logged In Already |
| DOESNTEXIST | The request you made was invalid due to nonexisting values in the db |
| OK | Confirmation everything worked |
| NOPERMS | No permission to access this data |
| MAXPL | Max players possible in a lobby (4) |