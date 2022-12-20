import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { BiBorderRadius } from 'react-icons/bi';

const avatars = {
    avatar1 : require("../../resources/avatar/1.jpg"),
    avatar2 : require("../../resources/avatar/2.jpg"),
    avatar3 : require("../../resources/avatar/3.jpg"),

}

const trendings = [
    {
        _id     : 'abcd123',
        avatar  : require("../../resources/avatar/1.jpg"),
        question: 'What is the preferred way to be a frontend developer?',
        answer  : 'You can easily start to learn from HTML & CSS once you get...',
        name    : 'Remy Sharp',
    },
    {
        _id     : 'abcd124',
        avatar  : require("../../resources/avatar/2.jpg"),
        question: 'What is the preferred way to be a frontend developer?',
        answer  : 'You can easily start to learn from HTML & CSS once you get...',
        name    : 'Remy Sharp',
    },
    {
        _id     : 'abcd125',
        avatar  : require("../../resources/avatar/3.jpg"),
        question: 'What is the preferred way to be a frontend developer?',
        answer  : 'You can easily start to learn from HTML & CSS once you get...',
        name    : 'Remy Sharp',
    },
];

export default function ListItems() {
    return (
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', borderRadius: '10px', marginTop: '20px', height: '90%'}}>
            {trendings.map((trending, index) => {
                return (
                <>
                    <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={trending.name} src={trending.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={trending.question}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — " + trending.answer+'\n'}

                            <a href="http://">more</a>
                        </React.Fragment>
                    }
                />
            </ListItem>
             {index < trendings.length-1?<Divider variant="inset" component="li" />:null}
                </>)
            })}

           <div className="row">
            <div className="col">
                <button className='btn btn-warning-outlined'>Show More</button>
            </div>
           </div>
        </List>
    );
}