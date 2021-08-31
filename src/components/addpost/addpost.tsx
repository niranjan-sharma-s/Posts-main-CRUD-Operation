import { useState } from 'react'
import { Icon } from 'semantic-ui-react';
import BasicModal from '../modal/modal';
import './addpost.scss'

const AddPost = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const modal = (): JSX.Element => {
    return <BasicModal isOpen={isOpen} closeModal={closeModal} saveModal={saveModal} />;
  };

  const openModal = (): void => {
    setIsOpen(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
  }

  const saveModal = (): void => {
    setIsOpen(false)
  }

  return (
    <div className="items">
      <div className="title">
        <div className="header">
          <div className="headerpost">Posts</div>
          <span className="addpost">
            <Icon name='add' onClick={openModal} />
          </span>
        </div>

      </div>
      <div className="description"></div>
      {isOpen && modal()}
    </div>
  )
}

export default AddPost
