import { IPost } from './../../store/reducers/getUser';
import { useState } from "react";
import { BasicModal } from "../modal/modal";
import { Icon } from 'semantic-ui-react';
import { deleteAlert } from '../sweetalerts/deletealert';

export const SinglePost = (props: IPost): JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const modal = (): JSX.Element => {
    return <BasicModal isOpen={isOpen} closeModal={closeModal} saveModal={saveModal} {...props} />;
  };

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const saveModal = () => {
    setIsOpen(false)

  }

  const deleteModal = () => {
    deleteAlert(props)
  }

  const { title, description } = props

  return (
    <div className="items">
      <div className="titleIconWrapper">
        <div className="title">
          {title}
        </div>
        <span className="icon">
          <Icon name='pencil' onClick={openModal} />
          <Icon name='trash' onClick={deleteModal} />
        </span>
      </div>
      <div className="description">{description}</div>
      {isOpen && modal()}
    </div>
  )

}
