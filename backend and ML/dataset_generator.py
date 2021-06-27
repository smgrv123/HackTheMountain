
import numpy as np
import pandas as pd
import datetime
import random 


def create_df(csv_path = './csv/hospital.csv', json_path='./json/hospital.json', n=30): 
    date = [datetime.datetime.now().date() - datetime.timedelta(days=i) for i in range(n)]
    Total_new_patients = np.random.randint(0, high=100, size=n, dtype=int).reshape(-1)
    Total_patients_died = np.random.randint(0, high=20, size=n, dtype=int).reshape(-1)
    Total_patients_cured = np.random.randint(0, high=30, size=n, dtype=int).reshape(-1)
    Number_of_ventilators_idle = np.random.randint(0, high=100, size=n, dtype=int).reshape(-1)
    Number_of_ICUs_available = np.random.randint(0, high=100, size=n, dtype=int).reshape(-1)
    Average_cost_without_ventilator = sorted(34000 * np.random.rand(n, 1).reshape(-1))
    Average_cost_with_ventilator = sorted(44000* np.random.rand(n, 1).reshape(-1))
    Average_cost_isolation = sorted(24000 * np.random.rand(n, 1).reshape(-1))
    Total_oxygen_supply_tonnes = sorted(100*np.random.rand(n, 1).reshape(-1))
    Total_bed_supply = np.random.randint(0, high=100, size=n, dtype=int).reshape(-1)
    Total_vaccination_doses_available = np.random.randint(0, high=100, size=n, dtype=int).reshape(-1)

    data = {'Date': date,'Total_new_patients': Total_new_patients, 'Total_patients_died': Total_patients_died,
    'Total_patients_cured': Total_patients_cured, 'Number_of_ventilators_idle': Number_of_ventilators_idle, 
    'Number_of_ICUs_available': Number_of_ICUs_available,'Average_cost_without_ventilator': Average_cost_without_ventilator,
    'Average_cost_with_ventilator' : Average_cost_with_ventilator, 'Average_cost_isolation': Average_cost_isolation,
    'Total_oxygen_supply_tonnes': Total_oxygen_supply_tonnes, 'Total_bed_supply': Total_bed_supply, 
    'Total_vaccination_doses_available': Total_vaccination_doses_available}


    hospital_df = pd.DataFrame(data = data, columns = ['Date','Total_new_patients', 'Total_patients_died', 'Total_patients_cured','Number_of_ventilators_idle',
    'Number_of_ICUs_available','Average_cost_without_ventilator','Average_cost_with_ventilator','Average_cost_isolation',
    'Total_oxygen_supply_tonnes', 'Total_bed_supply', 'Total_vaccination_doses_available'])

    # print(hospital_df.head())

    hospital_df.to_csv(csv_path, index=False)
    hospital_df.to_json(json_path)
    return hospital_df

create_df('./csv/hospital.csv', './json/hospital.json', 30)