import React from 'react';
import styles from './index.module.scss';
import { Form, Checkbox } from 'react-daisyui';

const Filter = () => {
  return (
    <div className={styles['fillter']}>
      <div className={styles['fillter-language']}>
        <div className={styles['title-fillter']}>Language</div>
        <Form className={styles['choose-form']}>
          <Form.Label title="English">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="Jappan">
            <Checkbox name="option" />
          </Form.Label>
        </Form>
      </div>
      <div className={styles['fillter-language']}>
        <div className={styles['title-fillter']}>Expansion:</div>
        <Form className={styles['choose-form']}>
          <Form.Label title="Scarlet & Violet">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="Sword & Shield">
            <Checkbox name="option" />
          </Form.Label>
        </Form>
      </div>
      <div className={styles['fillter-price']}>
        <div className={styles['title-fillter']}>Price:</div>
        <Form className={styles['choose-form']}>
          <Form.Label title="Under S$20">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="S$20 - S$50">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="S$50 - S$100">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="S$100 - S$200">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="Over S$200">
            <Checkbox name="option" />
          </Form.Label>
        </Form>
      </div>
      <div className={styles['fillter-availability']}>
        <div className={styles['title-fillter']}>Availability</div>
        <Form className={styles['choose-form']}>
          <Form.Label title="Available Now">
            <Checkbox name="option" />
          </Form.Label>
          <Form.Label title="Pre-Order">
            <Checkbox name="option" />
          </Form.Label>
        </Form>
      </div>
    </div>
  );
};

export default Filter;
