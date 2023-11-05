import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { AppContainer } from '../../atoms';
import { Button, Input } from '../../components';
import { HA } from '../../styles';
import { spacing, routesPath, colors } from '../../utils';
const { POKEMON } = routesPath;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const processFlowData = [
  {
    text: 'User details',
    isActive: true,
  },
  {
    text: 'Pokemon',
    isActive: false,
  },
  {
    text: 'Review',
    isActive: false,
  },
];

function Home() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    tel: yup.string().matches(phoneRegExp, 'Please enter valid number').required('Phone number is required'),
    address: yup.string().required('Address is required'),
  });

  return (
    <AppContainer navHeaderText="Home" processFlowData={processFlowData}>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            tel: '',
            address: '',
          }}
          enableReinitialize={true}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log({ values });

            const payload = {
              ...values,
            };

            console.log(payload, 'payload');
            navigate(POKEMON);
            setSubmitting(false);
          }}>
          {formikProps => {
            const { handleChange, values, handleSubmit, errors } = formikProps;
            return (
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Input
                      value={values.firstName}
                      name={'firstName'}
                      error={errors.firstName}
                      onChange={handleChange}
                      type="text"
                      label="First name *"
                      placeholder=" "
                    />

                    <Input
                      value={values.lastName}
                      name={'lastName'}
                      error={errors.lastName}
                      onChange={handleChange}
                      type="text"
                      label="Last name *"
                      placeholder=""
                    />

                    <Input
                      value={values.tel}
                      name={'tel'}
                      error={errors.tel}
                      onChange={handleChange}
                      type="tel"
                      label="Phone number *"
                      placeholder=""
                    />

                    <Input
                      value={values.address}
                      name={'address'}
                      error={errors.address}
                      onChange={handleChange}
                      type="text"
                      label="Address *"
                      placeholder=""
                    />

                    <Button type="submit" text="Continue" disabled={false} />
                  </div>
                </form>
              </div>
            );
          }}
        </Formik>
      </div>
    </AppContainer>
  );
}

export default Home;
