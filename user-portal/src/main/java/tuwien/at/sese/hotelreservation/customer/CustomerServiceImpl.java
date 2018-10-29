package tuwien.at.sese.hotelreservation.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;

    @Override
    public Customer create(Customer customer) {
        return repository.save(customer);
    }

    @Override
    public Customer delete(int id) {
        Customer customer = findById(id);
        if(customer != null){
            repository.delete(customer);
        }
        return customer;
    }

    @Override
    public List<Customer> findAll() {
        return repository.findAll();
    }

    @Override
    public Customer findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Customer update(Customer customer) {
        return repository.save(customer);
    }
}