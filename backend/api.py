import csv
import json

def convert_to_json(csv_path = './csv/hospital.csv', json_path='./json/hospital.json'):
    fieldnames = (
        'Date','Total_new_patients', 'Total_patients_died', 'Total_patients_cured','Number_of_ventilators_idle',
        'Number_of_ICUs_available','Average_cost_without_ventilator','Average_cost_with_ventilator','Average_cost_isolation',
        'Total_oxygen_supply_tonnes', 'Total_bed_supply', 'Total_vaccination_doses_available'
    )

    with open(csv_path, 'r') as csvfile:
        with open(json_path, 'w') as jsonfile:
            next(csvfile)
            reader = csv.DictReader(csvfile, fieldnames)
            final_data = []
            for i, row in enumerate(reader):
                final_data.append({
                    "Date" : row['Date'],
                    "Total_new_patients": row["Total_new_patients"],
                    "Total_patients_died": row["Total_patients_died"],
                    "Total_patients_cured": row["Total_patients_cured"],
                    "Number_of_ventilators_idle": row["Number_of_ventilators_idle"],
                    "Number_of_ICUs_available": row["Number_of_ICUs_available"],
                    "Average_cost_without_ventilator": row["Average_cost_without_ventilator"],
                    "Average_cost_with_ventilator": row["Average_cost_with_ventilator"],
                    "Average_cost_isolation": row["Average_cost_isolation"],
                    "Total_oxygen_supply_tonnes": row["Total_oxygen_supply_tonnes"],
                    "Total_bed_supply": row["Total_bed_supply"],
                    "Total_vaccination_doses_available": row["Total_vaccination_doses_available"],
                })
            json.dump(final_data, jsonfile)
            jsonfile.write('\n')
