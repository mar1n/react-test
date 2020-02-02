import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {

    test('renders learn react link', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('has valid spapshot', () => {
      const component = renderer.create(
        <App />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
})
