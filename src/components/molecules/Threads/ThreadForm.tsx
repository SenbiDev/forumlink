import React from 'react';
import { styled, Container, Stack, Typography, Box, Button, Modal, FormGroup } from '@mui/material';
import { Backdrop, IconButton, Input, Gap } from '../../atoms';
import { useAppDispatch } from '../../../hooks/hooks';
import { useInput } from '../../../hooks/useInput';
import { asyncAddThread } from '../../../states/threads/action'; 

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  minHeight: 404,
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0px 1px 7px 2px rgba(0, 0, 0, 0.25);',
  padding: '20px',
  [theme.breakpoints.up('lg')]: {
    width: 620,
  },
}));

const ThreadFormHeader = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

type ThreadInputFormType = {
  label: string,
  name: 'title' | 'body' | 'category',
  value?: string,
  onChange: any,
};

const ThreadInputForm = ({ label, name, value, onChange }: ThreadInputFormType) => (
    <Stack>
        <Typography variant='content-type' className='thread-form-label' >
            {label}
        </Typography>
        <Input label={label.toLowerCase()} name={name} input='thread input' contentType={'text'} value={value} onChange={onChange} />
    </Stack>
);

const ThreadActionForm = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
});

type ThreadFormType = { open: boolean, onModalCloseEventHandler: () => void };

function ThreadForm({ open, onModalCloseEventHandler }: ThreadFormType) {
  const [inputs, onValueChangeHandler] = useInput({ title: '', body: '', category: '' });
  const dispatch = useAppDispatch();    

  const onCrateThreadEventHandler = () => {
    dispatch(asyncAddThread({ ...inputs }));
    inputs.title = '';
    inputs.body = '';
    inputs.category = '';
    onModalCloseEventHandler();
  };
  return (
        <>
            <Backdrop open={open}>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <StyledContainer maxWidth={false} disableGutters>
                        <ThreadFormHeader>
                            <Typography variant='text' className='add a thread' >
                                Add a thread
                            </Typography>
                            <IconButton type='close' onClick={onModalCloseEventHandler} />
                        </ThreadFormHeader>
                        <Gap height={'10px'} />
                        <Box>
                            <FormGroup>
                                <ThreadInputForm label='Title' name='title' value={inputs.title} onChange={onValueChangeHandler} />
                                <Gap height={'20px'} />
                                <ThreadInputForm label='Body' name='body' value={inputs.body} onChange={onValueChangeHandler} />
                                <Gap height={'20px'} />
                                <ThreadInputForm label='Category' name='category' value={inputs.category} onChange={onValueChangeHandler} />
                                <Gap height={'90px'} />
                                <ThreadActionForm>
                                    <Button variant='form-thread' type='button' onClick={onCrateThreadEventHandler}>
                                        Create
                                    </Button>
                                </ThreadActionForm>

                            </FormGroup>
                        </Box>
                    </StyledContainer>
                </Modal>
            </Backdrop>
        </>
  );
}

export default ThreadForm;