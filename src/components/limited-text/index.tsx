import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  text: string;
  limit: number;
}
export const LimitedText = ({ text, limit }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = text?.slice(0, limit);
  const [openModal, setOpenModal] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setOpenModal(!openModal);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.module}>
      <p className={styles.text}>{truncatedText}</p>
      {text?.length > limit && !isExpanded && (
        <Button
          variant='text'
          onClick={toggleExpand}
          style={{
            textTransform: 'none',
            opacity: '0.6',
            marginTop: '-15px',
            backgroundColor: 'white',
            color: 'blue',
          }}
        >
          Expand
        </Button>
      )}

      {/* Modal for extra text */}
      <Modal open={openModal} onClose={toggleModal}>
        <Box
          sx={{
            width: 600,
            bgcolor: 'white',
            p: 2,
            top: '50%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            maxHeight: '400px',
            overflow: 'auto',
          }}
        >
          <div className={styles.modalWrapper}>
            <h3>Job Description</h3>
            <p>{text}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LimitedText;
