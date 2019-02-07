import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUpPage, { SignupView } from '../SignupView';

const mockStore = configureStore([thunk]);

describe('signup view', () => {
  let wrapper;
  let store;

  let props = {
    postDataThunkPublic: jest.fn(),
    error: null,
    successMessage: null,
  };

  const initialState = {
    message: null,
    error: null,
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('renders conatainer with chikd component successfully', () => {
    wrapper = shallow(<SignupView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders connected component successfully', () => {
    const state = {
      authReducer: {
        error: {
          message: '',
        },
        successMessage: {
          message: 'new user registered',
        },
      },
    };
    store = mockStore(state);
    props = {
      postDataThunkPublic: jest.fn(),
      error: {
        message: '',
      },
      successMessage: {
        message: 'new user registered',
      },
    };
    wrapper = mount(<Provider store={store}>
      <SignUpPage {...props}/>
    </Provider>);
  });

  it('should handle change event on inputs', () => {
    const onChange = jest.fn();
    wrapper = mount(<SignupView {...props} onChange={onChange}/>);
    const event = 'kabanga';
    wrapper.find('.username').simulate('change', event);
    expect(wrapper.find('.username')).toBeDefined();
  });

  it('should handle change event on radio inputs', () => {
    const onRadioChange = jest.fn();
    wrapper = mount(<SignupView {...props} onRadioChange={onRadioChange}/>);
    wrapper.find('.radio-button').simulate('change');
    expect(wrapper.find('.radio-button')).toBeDefined();
  });

  it('should handle click event on button', () => {
    const onSubmit = jest.fn();
    wrapper = mount(<SignupView {...props} onSubmit={onSubmit}/>);
    wrapper.find('.sign-up').simulate('click');
    expect(wrapper.find('.sign-up')).toBeDefined();
  });

  it('should call component will receive props with success', () => {
    const historyMock = { push: jest.fn() };
    const state = {
      username: '',
      email: '',
      contact: '',
      password: '',
      role: '',
      error: '',
      success: { message: 'new user registered' },
    };
    wrapper = mount(<SignupView {...props} history={historyMock}/>);
    wrapper.setProps({
      postDataThunkPublic: jest.fn(),
      error: '',
      message: 'new user registered',
    }, () => {
      expect(wrapper.state()).toEqual(state);
    });
    expect(historyMock.push.mock.calls[0]).toEqual(['/login']);
  });

  it('should call component will receive props with error message', () => {
    const historyMock = { push: jest.fn() };
    const state = {
      username: '',
      email: '',
      contact: '',
      password: '',
      role: '',
      error: "username can't be empty",
      success: '',
    };
    props = {
      postDataThunkPublic: jest.fn(),
      successMessage: null,
      error: "username can't be empty",
    };

    wrapper = mount(<SignupView {...props} history={historyMock}/>);
    wrapper.setProps({
      postDataThunkPublic: jest.fn(),
      error: "username can't be empty",
      message: null,
    });
  });
});
