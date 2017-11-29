package guru.jhipstser.brews.repository;

import org.springframework.beans.factory.annotation.Autowired;

public class AbstractRepositoryTest {

    @Autowired
    RfbLocationRepository locationRepository;

    @Autowired
    RfbEventRepository eventRepository;

    @Autowired
    RfbEventAttendanceRepository eventAttendanceRepository;

    @Autowired
    RfbUserRepository userRepository;
}
