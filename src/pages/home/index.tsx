import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { AppContainer } from '../../atoms';
import { Button, Input } from '../../components';
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks';
import { savedPokemonRequest } from '../../services/slice';
import { routesPath } from '../../utils';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    tel: yup.string().matches(phoneRegExp, 'Please enter valid number').required('Phone number is required'),
    address: yup.string().required('Address is required'),
  });

  const savedPokemonState = useAppSelector(state => state.savedPokemon);

  const userId = uuidv4();
  return (
    <AppContainer navHeaderText="Home" processFlowData={processFlowData} secondaryView>
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
            const payload = {
              id: userId,
              step: 2,
              ...values,
            };
            dispatch(savedPokemonRequest([...savedPokemonState.data, payload]));

            navigate(POKEMON, { state: { id: userId } });
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
