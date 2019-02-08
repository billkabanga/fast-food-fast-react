import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ClientPage, { ClientView } from '../ClientView';

const mockStore = configureStore([thunk]);

describe('login view', () => {
  let wrapper;
  let store;

  let props = {
    getDataThunkPublic: jest.fn(),
    postDataThunkPrivate: jest.fn(),
    error: null,
    successMessage: null,
    menu: [
      {
        item: 'chips',
        price: '2000',
      },
      {
        item: 'chbnn',
        price: '2000',
      },
    ],
  };

  const initialState = {
    message: '',
    error: '',
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('renders container with child component successfully', () => {
    wrapper = shallow(<ClientView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders connected component successfully', () => {
    const state = {
      orderReducer: {
        error: {
          message: '',
        },
        successMessage: {
          message: 'Order placed successfully',
        },
      },
      menuReducer: {
        menu: [
          {
            item: 'chips',
            price: '2000',
          },
          {
            item: 'chbnn',
            price: '2000',
          },
        ],
      },
    };
    store = mockStore(state);
    props = {
      getDataThunkPublic: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      error: {
        message: '',
      },
      successMessage: {
        message: 'Order placed successfully',
      },
      menu: [
        {
          item: 'chips',
          price: '2000',
        },
        {
          item: 'chbnn',
          price: '2000',
        },
      ],
    };
    wrapper = mount(<Provider store={store}>
      <ClientPage {...props}/>
    </Provider>);
  });

  it('should handle change event on inputs', () => {
    const onChange = jest.fn();
    wrapper = mount(<ClientView {...props} onChange={onChange}/>);
    const event = 'chips';
    wrapper.find('.input-item').first().simulate('change', event);
    expect(wrapper.find('.input-item').first()).toBeDefined();
  });

  it('should handle click event on button', () => {
    const onClick = jest.fn();
    wrapper = mount(<ClientView {...props} onClick={onClick}/>);
    wrapper.find('.sign-up').simulate('click');
    expect(wrapper.find('.sign-up')).toBeDefined();
  });

  it('should call component will receive props with success', () => {
    const state = {
      item: '',
      quantity: '',
      error: '',
      success: 'Order placed successfully',
    };
    wrapper = mount(<ClientView {...props}/>);
    wrapper.setProps({
      getDataThunkPublic: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      error: '',
      success: { message: 'Order placed successfully' },
    }, () => {
      expect(wrapper.state()).toEqual(state);
    });
  });

  it('should call component will receive props with error message', () => {
    const historyMock = { push: jest.fn() };
    props = {
      getDataThunkPublic: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      successMessage: null,
      error: 'Transaction available to only client user',
    };

    wrapper = mount(<ClientView {...props} history={historyMock}/>);
    wrapper.setProps({
      getDataThunkPublic: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      error: { message: 'Transaction available to only client user' },
      message: null,
    });
  });
});
