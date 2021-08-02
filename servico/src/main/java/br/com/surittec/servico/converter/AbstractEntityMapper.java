package br.com.surittec.servico.converter;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public abstract class AbstractEntityMapper<D, E> implements EntityMapper<D, E> {

    @Override
    public List<E> toEntity(List<D> dtoList) {
        if (Objects.nonNull(dtoList)) {
            return dtoList.stream()
                    .map(this::toEntity)
                    .collect(Collectors.toList());
        }
        return null;
    }

    @Override
    public List<D> toDto(List<E> entityList) {
        if (Objects.nonNull(entityList)) {
            return entityList.stream()
                    .map(this::toDto)
                    .collect(Collectors.toList());
        }
        return null;
    }

}
