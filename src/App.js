import {useEffect, useState} from "react";
import {
    Box,
    Button,
    createTheme,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
    ThemeProvider
} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FF9800",
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

function App() {
    const chats = [
        {
            id: 'chat1',
            name: 'main'
        },
        {
            id: 'chat2',
            name: 'flood'
        }
    ];
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('')

    const setId = () => {
        return messageList.length ? messageList[messageList.length - 1].id + 1 : 0
    }
    const addToMessageList = (event) => {
        setMessageList(prevMessageList => [...prevMessageList, {id: setId(), author: author, text: message}])
        event.preventDefault()
        setMessage('')
    }
    useEffect(() => {
        setTimeout(() => {
            if (messageList[messageList.length - 1] && messageList[messageList.length - 1].author) {
                setMessageList(prevMessageList => [...prevMessageList, {
                    id: messageList.length,
                    text: `${messageList[messageList.length - 1].author} message send`
                }])
            }
        }, 1000);
    }, [messageList]);
    return (
        <Box style={{display: "flex"}}>
            <ThemeProvider theme={theme}>
                <Box sx={{width: '20%', bgcolor: '#AFEEEE'}}>
                    <h4>Список чатов:</h4>
                    <List>
                        {chats.map(
                            (chat) => {
                                return (
                                    <ListItem disablePadding key={chat.id}>
                                        <ListItemButton >
                                            <ListItemText primary={chat.name}/>
                                        </ListItemButton>
                                    </ListItem>
                                );
                            }
                        )}

                    </List>
                </Box>
                <Box style={{height: '100vh', width: '80%', position: 'relative', backgroundColor: '#E0FFFF'}}>
                    {messageList.map(
                        item => {
                            return (
                                <Box key={item.id}>
                                    <p>{item.author}: {item.text}</p>
                                </Box>
                            )
                        }
                    )}
                    <Box style={{height: '40px', position: 'absolute', bottom: '0'}}>
                        <form onSubmit={addToMessageList}>
                            <TextField
                                style={{width: '20%'}}
                                id="outlined-basic"
                                label="Author"
                                variant="outlined"
                                size='small'
                                onChange={event => setAuthor(event.target.value)}
                                required
                            />
                            <TextField
                                style={{width: '65%'}}
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                                size='small'
                                value={message}
                                onChange={event => setMessage(event.target.value)}
                                autoFocus
                                required
                            />
                            <Button
                                style={{backgroundColor: theme.palette.primary.main, width: '15%', color: 'black'}}
                                type='submit' variant="outlined">Send</Button>
                        </form>
                    </Box>
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default App;
