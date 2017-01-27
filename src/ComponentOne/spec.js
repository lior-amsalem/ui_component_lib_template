import ComponentOne from './index';

describe('Example test ComponentOne', () => {

    it('Should be a div type element', () => {
        const CompOne = shallow(<ComponentOne />);

        expect(CompOne.type()).to.equal('div');
    });

    it('Should be a div type element', () => {
        const CompOne = shallow(<ComponentOne />);

        expect(CompOne.is('.hello-world')).to.equal(true);
    });

    it('Should have hello-world class', () => {
        const CompOne = shallow(<ComponentOne />);

        expect(CompOne.is('.hello-world')).to.equal(true);
    })
});