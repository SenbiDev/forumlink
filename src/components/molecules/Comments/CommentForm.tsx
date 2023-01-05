import React from 'react';
import { styled, Stack, Typography, Button } from '@mui/material';
import { Gap, Input } from '../../atoms';
import { useAppDispatch } from '../../../hooks/hooks';
import { asyncAddComment } from '../../../states/threadDetail/action';
import { useInput } from '../../../hooks/useInput';

const CommentFormWrapper = styled(Stack)({ gap: '15px' });

type CommentInputFormType = {
  label: string,
  name: 'comment',
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
};

const CommentInputForm = ({ label, name, value, onChange }: CommentInputFormType) => (
    <Stack>
        <Typography variant='text' className='add a comment' >
            {label}
        </Typography>
        <Gap height={5} />
        <Input label={label.toLowerCase()} name={name} input='text area' contentType={'text'} value={value} onChange={onChange} maxRows={3} multiline  />
    </Stack>
);

const CommentSubmit = styled(Stack)({ flexDirection: 'row', justifyContent: 'flex-end' });

type CommentFormType = { threadId: string };

function CommentForm({ threadId }: CommentFormType) {
  const [inputs, onValueChangeHandler] = useInput({ comment: '' });
  const dispatch = useAppDispatch();

  const onCrateCommentEventHandler = () => {
    dispatch(asyncAddComment({ content: (inputs.comment as string), threadId }));
    inputs.comment = '';
  };

  return (
        <CommentFormWrapper>
            <CommentInputForm label='Add a comment' name='comment' value={inputs.comment} onChange={onValueChangeHandler} />
            <CommentSubmit>
                <Button variant='submit' onClick={onCrateCommentEventHandler} >
                    Submit
                </Button>
            </CommentSubmit>
        </CommentFormWrapper>
  );
}

export default CommentForm;