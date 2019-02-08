import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AdminPage, { AdminView } from '../AdminView';

const mockStore = configureStore([thunk]);

describe('admin view', () => {
  let wrapper;
  let store;

  let props = {
    postDataThunkPrivate: jest.fn(),
    getDataThunkPublic: jest.fn(),
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
    message: null,
    error: null,
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    window.location.reload = jest.fn();
  });

  it('renders conatainer with chikd component successfully', () => {
    wrapper = shallow(<AdminView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders connected component successfully', () => {
    const state = {
      menuReducer: {
        error: {
          message: '',
        },
        successMessage: {
          message: 'Food option added successfuly',
        },
      },
    };
    store = mockStore(state);
    props = {
      postDataThunkPrivate: jest.fn(),
      getDataThunkPublic: jest.fn(),
      error: {
        message: '',
      },
      successMessage: {
        message: 'Food option added successfuly',
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
      <AdminPage {...props}/>
    </Provider>);
  });

  it('should handle change event on inputs', () => {
    const onChange = jest.fn();
    wrapper = mount(<AdminView {...props} onChange={onChange}/>);
    const event = 'chips';
    wrapper.find('.input-item').first().simulate('change', event);
    expect(wrapper.find('.input-item').first()).toBeDefined();
  });

  it('should handle click event on button', () => {
    const onClick = jest.fn();
    wrapper = mount(<AdminView {...props} onClick={onClick}/>);
    wrapper.find('.sign-up').simulate('click');
    expect(wrapper.find('.sign-up')).toBeDefined();
  });

  it('should call component will receive props with success', () => {
    const state = {
      item: '',
      price: '',
      success: 'Food option added successfuly',
      error: '',
    };
    wrapper = mount(<AdminView {...props}/>);
    wrapper.setProps({
      postDataThunkPrivate: jest.fn(),
      getDataThunkPublic: jest.fn(),
      error: '',
      success: { message: 'Food option added successfuly' },
    }, () => {
      expect(wrapper.state()).toEqual(state);
    });
  });

  it('should call component will receive props with error message', () => {
    const historyMock = { push: jest.fn() };
    props = {
      postDataThunkPrivate: jest.fn(),
      getDataThunkPublic: jest.fn(),
      successMessage: null,
      error: { price: 'Please provide price, provide food item as well' },
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

    wrapper = mount(<AdminView {...props} history={historyMock}/>);
    wrapper.setProps({
      postDataThunkPublic: jest.fn(),
      getDataThunkPublic: jest.fn(),
      error: { message: { price: 'Please provide price, provide food item as well' } } ,
      message: null,
    });
  });
});
