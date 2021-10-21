import React from 'react';

interface TodoListItemProps{
    todo:{
        text : string;
        complete : boolean;
    };
}

export const TodoListItem: React.FC<TodoListItemProps> = props => {
    return (
        <li>Content</li>
        
    );
};

