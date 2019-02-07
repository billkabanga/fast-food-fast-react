import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginPage, { LoginView } from '../LoginView';

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
    wrapper = shallow(<LoginView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders connected component successfully', () => {
    const state = {
      authReducer: {
        error: {
          message: '',
        },
        successMessage: {
          message: 'logged in successfully',
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
        message: 'logged in successfully',
      },
    };
    wrapper = mount(<Provider store={store}>
      <LoginPage {...props}/>
    </Provider>);
  });

  it('should handle change event on inputs', () => {
    const onChange = jest.fn();
    wrapper = mount(<LoginView {...props} onChange={onChange}/>);
    const event = 'kabanga';
    wrapper.find('.username').simulate('change', event);
    expect(wrapper.find('.username')).toBeDefined();
  });

  it('should handle change event on radio inputs', () => {
    const onRadioChange = jest.fn();
    wrapper = mount(<LoginView {...props} onRadioChange={onRadioChange}/>);
    wrapper.find('.radio-button').simulate('change');
    expect(wrapper.find('.radio-button')).toBeDefined();
  });

  it('should handle click event on button', () => {
    const onSubmit = jest.fn();
    wrapper = mount(<LoginView {...props} onSubmit={onSubmit}/>);
    wrapper.find('.sign-up').simulate('click');
    expect(wrapper.find('.sign-up')).toBeDefined();
  });

  it('should call component will receive props with success', () => {
    const historyMock = { push: jest.fn() };
    const state = {
      username: '',
      password: '',
      role: '',
      error: '',
      success: { message: 'logged in successfully' },
    };
    wrapper = mount(<LoginView {...props} history={historyMock}/>);
    wrapper.setProps({
      postDataThunkPublic: jest.fn(),
      error: '',
      message: 'logged in successfully',
    }, () => {
      expect(wrapper.state()).toEqual(state);
    });
    expect(historyMock.push.mock.calls[0]).toEqual(['/']);
  });

  it('should call component will receive props with error message', () => {
    const historyMock = { push: jest.fn() };
    props = {
      postDataThunkPublic: jest.fn(),
      successMessage: null,
      error: "username can't be empty",
    };

    wrapper = mount(<LoginView {...props} history={historyMock}/>);
    wrapper.setProps({
      postDataThunkPublic: jest.fn(),
      error: "username can't be empty",
      message: null,
    });
  });
});
