import MsgComponent from './index';

describe('Example test MsgComponent', () => {

    it('Should be a div type element', () => {
        const CompOne = shallow(<MsgComponent />);

        expect(CompOne.type()).to.equal('div');
    });

    it('Should be a div type element', () => {
        const CompOne = shallow(<MsgComponent />);

        expect(CompOne.is('.hello-world')).to.equal(true);
    });

    it('Should have hello-world class', () => {
        const CompOne = shallow(<MsgComponent />);

        expect(CompOne.is('.hello-world')).to.equal(true);
    })
});